import type { RubiksCube } from "../rubiks-cube-model";
import { getColumn, rotateFaceClockwise, rotateFaceCounterClockwise, setColumn } from "./rubiks-cube-rotation-support";

export function leftFaceRotationUp (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Left = rotateFaceCounterClockwise(rubikscube.Left);
 
        const tempCol = getColumn(rubikscube.Up, 0);
 
        setColumn(rubikscube.Up, 0, getColumn(rubikscube.Front, 0));
        setColumn(rubikscube.Front, 0, getColumn(rubikscube.Down, 0));
        setColumn(rubikscube.Down, 0, getColumn(rubikscube.Back, 2).reverse());
        setColumn(rubikscube.Back, 2, tempCol.reverse());
    }
    return rubikscube;
}

export function leftFaceRotationDown (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Left = rotateFaceClockwise(rubikscube.Left);
 
        const tempCol = getColumn(rubikscube.Up, 0);
 
        setColumn(rubikscube.Up, 0, getColumn(rubikscube.Back, 2).reverse());
        setColumn(rubikscube.Back, 2, getColumn(rubikscube.Down, 0).reverse());
        setColumn(rubikscube.Down, 0, getColumn(rubikscube.Front, 0));
        setColumn(rubikscube.Front, 0, tempCol);
    }
    return rubikscube;
}