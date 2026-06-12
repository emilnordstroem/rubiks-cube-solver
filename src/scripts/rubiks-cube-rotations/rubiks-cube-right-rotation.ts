import type { RubiksCube } from "../rubiks-cube-model";
import { getColumn, rotateFaceClockwise, rotateFaceCounterClockwise, setColumn } from "./rubiks-cube-rotation-support";

export function rightFaceRotationUp (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Right = rotateFaceCounterClockwise(rubikscube.Right);
 
        const tempCol = getColumn(rubikscube.Up, 2);
 
        setColumn(rubikscube.Up,    2, getColumn(rubikscube.Front, 2));
        setColumn(rubikscube.Front, 2, getColumn(rubikscube.Down, 2));
        setColumn(rubikscube.Down,  2, getColumn(rubikscube.Back, 0).reverse());
        setColumn(rubikscube.Back,  0, tempCol.reverse());
    }
    return rubikscube;
}

export function rightFaceRotationDown (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Right = rotateFaceClockwise(rubikscube.Right);
 
        const tempCol = getColumn(rubikscube.Up, 2);
 
        setColumn(rubikscube.Up,    2, getColumn(rubikscube.Back, 0).reverse());
        setColumn(rubikscube.Back,  0, getColumn(rubikscube.Down, 2).reverse());
        setColumn(rubikscube.Down,  2, getColumn(rubikscube.Front, 2));
        setColumn(rubikscube.Front, 2, tempCol);
    }
    return rubikscube;
}