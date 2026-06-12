import type { RubiksCube } from "../../rubiks-cube-model";

/*
export function daisyAlgorithm (rubikscube: RubiksCube): RubiksCube {
    
}
*/

const center: string = 'yellow'
const edge: string = 'white' 

function isDaisyComplete (face: string[][]): boolean {
    for (let row = 0; row < face.length; row++) {
        for (let column = 0; column < face[row].length; column++) {
            const squareColor: string = face[row][column]
            if (isCorner(row, column) && !hasColor(squareColor, edge)) {
                return false
            } else if (isEdge(row, column) && !hasColor(squareColor, edge)) {
                return false;
            } else if (isCenter(row, column) && !hasColor(squareColor, center)) {
                return false
            } 
        }
    }
    return true
}

export function hasColor(colorOfSquare: string, colorToMatch: string){
    return colorOfSquare == colorToMatch
}

function isCorner (row: number, column: number): Boolean {
    return row == 0 && column == 0
        || row == 0 && column == 2
        || row == 2 && column == 0
        || row == 2 && column == 2
}

function isEdge (row: number, column: number): boolean {
    return row == 0 && column == 1
        || row == 1 && column == 0
        || row == 1 && column == 2
        || row == 2 && column == 1
}

function isCenter (row: number, column: number): Boolean {
    return row == 1 && column == 1
}