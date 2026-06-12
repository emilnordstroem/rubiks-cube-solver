import type { RubiksCube } from "../rubiks-cube-model";
import { rotateFaceClockwise, rotateFaceCounterClockwise } from "./rubiks-cube-rotation-support";

export function upFaceRotationLeft (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Up = rotateFaceClockwise(rubikscube.Up)
        const tempRow = [...rubikscube.Front[0]]

        rubikscube.Front[0] = [...rubikscube.Right[0]]
        rubikscube.Right[0] = [...rubikscube.Back[0]]
        rubikscube.Back[0]  = [...rubikscube.Left[0]]
        rubikscube.Left[0]  = tempRow
    }
    return rubikscube
}

export function upFaceRotationRight (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Up = rotateFaceCounterClockwise(rubikscube.Up)
        const tempRow = [...rubikscube.Front[0]]

        rubikscube.Front[0] = [...rubikscube.Left[0]]
        rubikscube.Right[0] = [...rubikscube.Front[0]]
        rubikscube.Back[0]  = [...rubikscube.Right[0]]
        rubikscube.Right[0]  = tempRow
    }
    return rubikscube
}