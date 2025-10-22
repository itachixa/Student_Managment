import "../Styles/MarksP.css"
function Student_Marks({ name }) {
    return (
        <>
            <tr>
                <th>{name}</th>
                <th>
                    <select>
                        <option value="0">Marks</option>
                        <option value="0">0</option>
                        <option value="0">1</option>
                        <option value="0">2</option>
                        <option value="0">3</option>
                        <option value="0">4</option>
                        <option value="0">5</option>
                        <option value="0">6</option>
                        <option value="0">7</option>
                        <option value="0">8</option>
                        <option value="0">9</option>
                        <option value="0">10</option>
                        <option value="0">11</option>
                        <option value="0">12</option>
                        <option value="0">13</option>
                        <option value="0">14</option>
                        <option value="0">15</option>
                    </select>
                </th>
            </tr>

        </>
    );
}
export default Student_Marks; 