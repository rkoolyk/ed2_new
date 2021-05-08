import './UploadFlightCSV.css';

export function UploadFlightCSV() {
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

    return <div className='upload-flight'>
        <p>Upload a CSV flight file:</p>
        <input
            type='file'
            id='file'
            className='input-flight'
            accept='.csv'
            onChange={e => handleFileChosen(e.target.files[0])}
        />
    </div>;
};


export default UploadFlightCSV;