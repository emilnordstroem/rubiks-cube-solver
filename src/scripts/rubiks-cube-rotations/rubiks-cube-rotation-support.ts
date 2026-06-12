export function rotateFaceClockwise(face: string[][]): string[][] {
    return [
        [face[2][0], face[1][0], face[0][0]],
        [face[2][1], face[1][1], face[0][1]],
        [face[2][2], face[1][2], face[0][2]]
    ]
}

export function rotateFaceCounterClockwise(face: string[][]): string[][] {
    return [
        [face[0][2], face[1][2], face[2][2]],
        [face[0][1], face[1][1], face[2][1]],
        [face[0][0], face[1][0], face[2][0]]
    ]
}

export function getColumn(face: string[][], column: number): string[] {
    return [face[0][column], face[1][column], face[2][column]];
}
 
export function setColumn(face: string[][], column: number, colors: string[]): void {
    face[0][column] = colors[0];
    face[1][column] = colors[1];
    face[2][column] = colors[2];
}
