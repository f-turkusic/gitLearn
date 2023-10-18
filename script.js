document.addEventListener('DOMContentLoaded', () =>
{
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const uploadedFiles = document.getElementById('uploadedFiles');

    uploadButton.addEventListener('click', () =>
    {
        const files = fileInput.files;
        if (files.length > 0)
        {
            for (let i = 0; i < files.length; i++)
            {
                const file = files[i];
                const fileName = file.name;
                const fileSize = (file.size / 1024).toFixed(2) + ' KB';

                const fileDetails = document.createElement('div');
                fileDetails.textContent = `File Name: ${fileName}, File Size: ${fileSize}`;
                uploadedFiles.appendChild(fileDetails);
            }
        } else
        {
            alert('Please select a file to upload.');
        }
    });
});
