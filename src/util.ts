import { Camera } from "@mediapipe/camera_utils";
import { Hands, NormalizedLandmarkList, Results } from "@mediapipe/hands";
import * as tf from '@tensorflow/tfjs'
import { dispatch, getState, sentenceSlice } from "./store";

var model: tf.LayersModel;

var actions: string[] = [];
// var franco: {[key:string]: string};

var keypoints = [];
var sequence: number[][] = [];

var predictions: string[] = [];
var words: string[] = [];

const zeros = new Array(63).fill(0);
export const extractKeypoints = (landmarks: NormalizedLandmarkList) => {
  return landmarks.reduce(
    function (accumulator, currentValue) {
      return accumulator.concat([currentValue.x, currentValue.y, currentValue.z])
    },
    [] as number[]
  )
}
export function mode(arr: any[]) {
  return arr.sort((a, b) =>
    arr.filter(v => v === a).length
    - arr.filter(v => v === b).length
  ).pop();
}

function extractSequence(results: Results) {

  if (results.multiHandLandmarks && results.multiHandedness) {
    var lh = zeros;
    var rh = zeros;

    for (let index = 0; index < results.multiHandLandmarks.length; index++) {
      const classification = results.multiHandedness[index];
      const isRightHand = classification.label === 'Right';
      const landmarks = results.multiHandLandmarks[index];

      if (isRightHand) {
        rh = extractKeypoints(landmarks)
      }
      else {
        lh = extractKeypoints(landmarks)
      }
    }

    keypoints = [...lh, ...rh]
    sequence.push(keypoints)
  }

}

export async function loadModel() {
  const modelURL = 'model/model.json';
  model = await tf.loadLayersModel(modelURL);
}

export async function loadActions() {
  const response = await fetch("/model.csv");
  const data = await response.text();
  actions = data.split(",");
  // await loadFranco();
}

// async function loadFranco() {
//   const response = await fetch("/franco.json");
//   franco = await response.json();
// }

export async function loadVideoFeed(el: HTMLVideoElement) {
  const hands = new Hands({
    locateFile: (file) => {
      return `/hands/${file}`;
    }
  });
  hands.setOptions({
    maxNumHands: 2,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });
  hands.onResults(onResults);
  await hands.initialize()
  if (el) {
    new Camera(el, {
      onFrame: async () => {
        await hands.send({ image: el });
      },
    }).start()
  }

}
const makePrediction = (sequence: number[][]) => {
  let tensor: tf.Tensor3D = tf.tensor([sequence]);
  let outputTensor = model.predict(tensor)
  let res = (outputTensor as tf.Tensor3D).dataSync()
  let max = Math.max(...res)
  let argmax = [...res].indexOf(max);

  const threshold = getState().settings.threshold / 100
  if (max >= threshold) {
    console.log(actions[argmax], max);
    return actions[argmax]
  }
  return null;

}

function onResults(results: Results) {
  extractSequence(results)
  if (sequence.length === 2) {
    const prediction = makePrediction(sequence);
    const isNew = prediction !== words[words.length - 1];
    const isStable = predictions.length > 4 && prediction === mode(predictions);

    if (prediction) {
      predictions.push(prediction);
      dispatch(sentenceSlice.actions.addPrediction(prediction))
    }

    if (prediction && isNew && isStable) {
      words.push(prediction);
      predictions = [];
      dispatch(sentenceSlice.actions.addWord(prediction));
      const speakAlong = getState().settings.speakAlong;
      if (speakAlong) try {
        // speechSynthesis.speak(new SpeechSynthesisUtterance(franco[prediction]));
        new Audio(`/audio/${prediction}.mp3`).play();
      } catch (error) { } 
    }
    sequence = []
  }

}

export function logWords() {
  // const sentenceWords = getState().sentence.words;
  // const francoWords = sentenceWords.map(word => franco[word])
  // speechSynthesis.speak(new SpeechSynthesisUtterance(francoWords.join(" ")));
  dispatch(sentenceSlice.actions.logWords());
  words = []
}

export function getCounts(arr: string[]) {
  let countedWords = arr.reduce(function (counts, word) {
    if (word in counts) {
      counts[word]++
    }
    else {
      counts[word] = 1
    }
    return counts
  }, {} as { [key: string]: number })
  return countedWords;
}

