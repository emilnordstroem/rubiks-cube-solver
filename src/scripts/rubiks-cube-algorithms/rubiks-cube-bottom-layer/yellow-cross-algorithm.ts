import type { RubiksCube } from "../../rubiks-cube-model";
import { frontFaceRotationLeft, frontFaceRotationRight } from "../../rubiks-cube-rotations/rubiks-cube-front-rotation";
import { rightFaceRotationDown, rightFaceRotationUp } from "../../rubiks-cube-rotations/rubiks-cube-right-rotation";
import { upFaceRotationLeft, upFaceRotationRight } from "../../rubiks-cube-rotations/rubiks-cube-up-rotation";
import { hasColor } from "../rubiks-cube-top-layer/rubiks-cube-daisy-algorithm";
import { isYellowFish } from "./yellow-face-algorithm";

export function yellowCrossAlgorithm (rubikscube: RubiksCube): RubiksCube {
    const yellowFace = rubikscube.Up
    
    if (isYellowCross(yellowFace) || isYellowFish(yellowFace)) {
        return rubikscube
    }

    rubikscube = alignYellowPattern(rubikscube)

    rubikscube = frontFaceRotationRight(rubikscube, 1)
    rubikscube = upFaceRotationLeft(rubikscube, 1)
    rubikscube = rightFaceRotationUp(rubikscube, 1)
    rubikscube = upFaceRotationRight(rubikscube, 1)
    rubikscube = rightFaceRotationDown(rubikscube, 1)
    rubikscube = frontFaceRotationLeft(rubikscube, 1)
    
    return yellowCrossAlgorithm(rubikscube)
}

function alignYellowPattern(rubikscube: RubiksCube): RubiksCube {
    const face = rubikscube.Up

    if (isYellowLaidDown(face)) {
        if (!hasColor(face[1][0], 'yellow') || !hasColor(face[1][2], 'yellow')) {
            rubikscube = upFaceRotationRight(rubikscube, 1)
        }
        return rubikscube
    }

    if (isYellowSitting(face)) {
        while (!hasColor(face[0][1], 'yellow') || !hasColor(face[1][0], 'yellow')) {
            rubikscube = upFaceRotationRight(rubikscube, 1)
        }
        return rubikscube
    }

    return rubikscube
}


function isYellowCross(face: string[][]): boolean {
    return (
        hasColor(face[0][1], 'yellow') && // top edge
        hasColor(face[1][0], 'yellow') && // left edge
        hasColor(face[1][2], 'yellow') && // right edge
        hasColor(face[2][1], 'yellow')    // bottom edge
    )
}

function isYellowLaidDown(face: string[][]): boolean {
    const top = hasColor(face[0][1], 'yellow')
    const bottom = hasColor(face[2][1], 'yellow')
    const left = hasColor(face[1][0], 'yellow')
    const right = hasColor(face[1][2], 'yellow')

    return (top && bottom && !left && !right) 
        || (left && right && !top && !bottom)
}

function isYellowSitting(face: string[][]): boolean {
    const top = hasColor(face[0][1], 'yellow')
    const bottom = hasColor(face[2][1], 'yellow')
    const left = hasColor(face[1][0], 'yellow')
    const right = hasColor(face[1][2], 'yellow')

    const count = [top, bottom, left, right].filter(Boolean).length
    return count === 2 && !isYellowLaidDown(face)
}
