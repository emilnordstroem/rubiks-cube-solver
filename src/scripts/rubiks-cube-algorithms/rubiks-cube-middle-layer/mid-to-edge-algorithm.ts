import type { RubiksCube } from "../../rubiks-cube-model";
import { hasColor } from "../rubiks-cube-bottom-layer/rubiks-cube-daisy-algorithm";

export function middleLayerAlgorithm (rubikscube: RubiksCube): RubiksCube {
    if (isMiddleLayerSolved(rubikscube)) {
        return rubikscube
    }




    return rubikscube
}

function isMiddleLayerSolved (rubikscube: RubiksCube): boolean {
    const faces = Object
        .entries(rubikscube)
        .filter(([face]) => face !== 'Up' && face !== 'Down')
    for (const face of faces) {
        const faceColor = face[1][1]
        if (!isFaceMiddleLayerSolved(face, faceColor)) {
            return true
        }
    }
    return true
}

function isFaceMiddleLayerSolved (face: string[][], faceColor: string): boolean {
    for (let column = 0; column < face[1].length; column++) {
        const pieceColor = face[1][column]
        if (!hasColor(pieceColor, faceColor)) {
            return false
        }
    }
    return true
}