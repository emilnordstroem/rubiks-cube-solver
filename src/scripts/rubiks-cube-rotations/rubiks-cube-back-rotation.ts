import type { RubiksCube } from "../rubiks-cube-model";
import { getColumn, rotateFaceClockwise, rotateFaceCounterClockwise, setColumn } from "./rubiks-cube-rotation-support";

export function backFaceRotationLeft (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Back = rotateFaceCounterClockwise(rubikscube.Back);
 
        const tempRow = [...rubikscube.Up[0]];
 
        rubikscube.Up[0] = getColumn(rubikscube.Right, 2);
        setColumn(rubikscube.Right, 2, [...rubikscube.Down[2]].reverse());
        rubikscube.Down[2] = getColumn(rubikscube.Left, 0).reverse();
        setColumn(rubikscube.Left, 0, tempRow);
    }
    return rubikscube;
}

export function backFaceRotationRight (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Back = rotateFaceClockwise(rubikscube.Back);
 
        const tempRow = [...rubikscube.Up[0]];
 
        rubikscube.Up[0] = getColumn(rubikscube.Left, 0).reverse();
        setColumn(rubikscube.Left, 0, [...rubikscube.Down[2]]);
        rubikscube.Down[2] = getColumn(rubikscube.Right, 2).reverse();
        setColumn(rubikscube.Right, 2, tempRow);
    }
    return rubikscube;
}