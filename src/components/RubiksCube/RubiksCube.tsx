import { RubiksCube as RubiksCubeModel } from "../../scripts/rubiks-cube-model"
import Face from "./Face"

function RubiksCube () {
    const rubiksCube: RubiksCubeModel = new RubiksCubeModel()

    return (
        <table>
            <tbody>
                <tr>
                    <Face face={null} />
                    <Face face={rubiksCube.Up} />
                    <Face face={null} />
                    <Face face={null} />
                </tr>
                <tr>
                    <Face face={rubiksCube.Left} />
                    <Face face={rubiksCube.Front} />
                    <Face face={rubiksCube.Right} />
                    <Face face={rubiksCube.Back} />
                </tr>
                <tr>
                    <Face face={null} />
                    <Face face={rubiksCube.Down} />
                    <Face face={null} />
                    <Face face={null} />
                </tr>
            </tbody>
        </table>
    )
}

export default RubiksCube
