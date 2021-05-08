import './UploadTrainCSV.css';

export function UploadTrainCSV() {
    const handleFileRead = (e) => {
        const content = fileReader.result;
        //parseCSV(content);
        // … do something with the 'content' …
    };
    let fileReader;
    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };

    return <div className='upload-expense'>
        <p>
            Upload a CSV train file:
        </p>
        <input
            type='file'
            id='file'
            className='input-train'
            accept='.csv'
            onChange={e => handleFileChosen(e.target.files[0])}
        />
    </div>;
};


export default UploadTrainCSV;