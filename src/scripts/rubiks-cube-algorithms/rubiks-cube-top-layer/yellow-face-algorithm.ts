import type { RubiksCube } from "../../rubiks-cube-model";
import { rightFaceRotationDown, rightFaceRotationUp } from "../../rubiks-cube-rotations/rubiks-cube-right-rotation";
import { upFaceRotationLeft, upFaceRotationRight } from "../../rubiks-cube-rotations/rubiks-cube-up-rotation";
import { hasColor, isCorner } from "../rubiks-cube-bottom-layer/rubiks-cube-daisy-algorithm";

export function yellowFaceAlgorithm (rubikscube: RubiksCube): RubiksCube {
    const yellowFace = rubikscube.Up

    if (isFullYellowFace(yellowFace)) {
        return rubikscube
    }

    rubikscube = alignYellowPattern(rubikscube)

    rubikscube = rightFaceRotationUp(rubikscube, 1)
    rubikscube = upFaceRotationLeft(rubikscube, 1)
    rubikscube = rightFaceRotationDown(rubikscube, 1)
    rubikscube = upFaceRotationLeft(rubikscube, 1)
    rubikscube = rightFaceRotationUp(rubikscube, 1)
    rubikscube = upFaceRotationLeft(rubikscube, 2)
    rubikscube = rightFaceRotationDown(rubikscube, 1)

    return rubikscube
}

export function isFullYellowFace (face: string[][]): boolean {
    for (let row = 0; row < face.length; row++) {
        for (let column = 0; column < face[row].length; column++) {
            const color = face[row][column]
            if (!hasColor(color, 'yellow')) {
                return false
            }
        }
    }
    return true
}

function alignYellowPattern(rubikscube: RubiksCube): RubiksCube {
    const face = rubikscube.Up

    if (hasNumberOfCornersOfColor(face, 1, 'yellow')) {
        while (!hasColor(face[2][0], 'yellow')) {
            rubikscube = upFaceRotationRight(rubikscube, 1)
        }
        return rubikscube
    }

    if (hasNumberOfCornersOfColor(face, 2, 'yellow')) {
        while (!hasColor(face[2][0], 'yellow')) {
            rubikscube = upFaceRotationRight(rubikscube, 1)
        }
        return rubikscube
    }

    return rubikscube
}

export function hasNumberOfCornersOfColor (face: string[][], numberOfCorners: number, color: string): boolean {
    let numberOfYellowCorners = 0
    for (let row = 0; row < face.length; row++) {
        for (let column = 0; column < face[row].length; column++) {
            const color = face[row][column]
            if (isCorner(row, column) && hasColor(color, 'yellow')) {
                numberOfYellowCorners++
            }
        }
    }
    return numberOfYellowCorners == numberOfCorners
}


