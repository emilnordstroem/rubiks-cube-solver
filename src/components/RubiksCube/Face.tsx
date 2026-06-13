function Face ({ face }: { face: string[][] | null }) {
    if (!face) {
        return (
            <td>
                
            </td>
        )
    }
    return (
        <td>
            <table>
                <tbody>
                    {face.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((color, columnIndex) => (
                                <td
                                    key={columnIndex}
                                    style={{
                                        backgroundColor: color,
                                        width: '40px',
                                        height: '40px',
                                        border: '2px solid #333',
                                    }}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </td>
    )
}

export default Face