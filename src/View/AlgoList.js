import './AlgoList.css';

export function AlgoList() {
    return (
        <body>
        <label className="algo-list">Please select an algorithm:</label>
        <br>
        </br>
        <select id="list" className="algorithms" size="2" multiple="multiple">
            <option value="simple"> Simple Anomaly Detector </option>
            <option value="hybrid"> Hybrid Anomaly Detector </option>
        </select>
        </body>
    );
}