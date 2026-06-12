import type { RubiksCube } from "../rubiks-cube-model";
import { getColumn, rotateFaceClockwise, rotateFaceCounterClockwise, setColumn } from "./rubiks-cube-rotation-support";

export function frontFaceRotationLeft (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Front = rotateFaceCounterClockwise(rubikscube.Front);
 
        const tempRow = [...rubikscube.Up[2]];
 
        rubikscube.Up[2] = getColumn(rubikscube.Right, 0);
        setColumn(rubikscube.Right, 0, [...rubikscube.Down[0]].reverse());
        rubikscube.Down[0] = getColumn(rubikscube.Left, 2).reverse();
        setColumn(rubikscube.Left, 2, tempRow);
    }
    return rubikscube;
}

export function frontFaceRotationRight (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Front = rotateFaceClockwise(rubikscube.Front);
 
        const tempRow = [...rubikscube.Up[2]];
 
        rubikscube.Up[2] = getColumn(rubikscube.Left, 2).reverse();
        setColumn(rubikscube.Left, 2, [...rubikscube.Down[0]]);
        rubikscube.Down[0] = getColumn(rubikscube.Right, 0).reverse();
        setColumn(rubikscube.Right, 0, tempRow);
    }
    return rubikscube;
}