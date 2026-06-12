import type { RubiksCube } from "./rubiks-cube-model";

// support functions for clock/counter clockwise rotation
function rotateFaceClockwise(face: string[][]): string[][] {
    return [
        [face[2][0], face[1][0], face[0][0]],
        [face[2][1], face[1][1], face[0][1]],
        [face[2][2], face[1][2], face[0][2]]
    ]
}

function rotateFaceCounterClockwise(face: string[][]): string[][] {
    return [
        [face[0][2], face[1][2], face[2][2]],
        [face[0][1], face[1][1], face[2][1]],
        [face[0][0], face[1][0], face[2][0]]
    ]
}

// rotation algorithms
/*
function upFaceRotationLeft (rubikscube: RubiksCube, movements: number): RubiksCube {
    

}

function upFaceRotationRight (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function frontFaceRotationLeft (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function frontFaceRotationRight (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function downFaceRotationLeft (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function downFaceRotationRight (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function backFaceRotationLeft (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function backFaceRotationRight (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function leftFaceRotationUp (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function leftFaceRotationDown (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function rightFaceRotationUp (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function rightFaceRotationDown (rubikscube: RubiksCube, movements: number): RubiksCube {

}
*/