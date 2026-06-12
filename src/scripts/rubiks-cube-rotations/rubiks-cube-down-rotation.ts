import type { RubiksCube } from "../rubiks-cube-model";
import { rotateFaceClockwise, rotateFaceCounterClockwise } from "./rubiks-cube-rotation-support";

export function downFaceRotationLeft (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Down = rotateFaceClockwise(rubikscube.Down)
        const tempRow = [...rubikscube.Front[2]]

        rubikscube.Front[2] = [...rubikscube.Right[2]]
        rubikscube.Right[2] = [...rubikscube.Back[2]]
        rubikscube.Back[2]  = [...rubikscube.Left[2]]
        rubikscube.Left[2]  = tempRow
    }
    return rubikscube
}

export function downFaceRotationRight (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Up = rotateFaceCounterClockwise(rubikscube.Up)
        const tempRow = [...rubikscube.Front[2]]

        rubikscube.Front[2] = [...rubikscube.Left[2]]
        rubikscube.Right[2] = [...rubikscube.Front[2]]
        rubikscube.Back[2]  = [...rubikscube.Right[2]]
        rubikscube.Right[2]  = tempRow
    }
    return rubikscube
}