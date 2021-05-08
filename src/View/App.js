import './App.css';
import UploadTrainCSV from "./UploadTrainCSV";
import UploadFlightCSV from "./UploadFlightCSV";
import {AlgoList} from "./AlgoList";

function App() {
  return (
      <div id="content">
          <div className="title">
              <p>
                  Anomaly Detection Server
              </p>
          </div>
          <div className="upload-train">
              <UploadTrainCSV/>
          </div>
          <div className="upload-flight">
              <UploadFlightCSV/>
          </div>
          <div className="choose-algo">
              <AlgoList/>
          </div>
      </div>
  );
}

export default App;
