document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('imageUpload');
    const uploadStatus = document.getElementById('uploadStatus');
    const previewImage = document.getElementById('previewImage');
    
    // Tampilkan preview gambar saat dipilih
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewImage.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });

    // Handle form submission
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const file = fileInput.files[0];
            if (!file) {
                uploadStatus.textContent = 'Silakan pilih gambar terlebih dahulu';
                return;
            }

            // Buat referensi ke lokasi penyimpanan di Firebase Storage
            const filePath = 'images/' + Date.now() + '_' + file.name;
            const fileRef = storageRef.child(filePath);
            
            // Upload file
            const uploadTask = fileRef.put(file);

            // Pantau proses upload
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Progress upload
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    uploadStatus.textContent = `Uploading: ${Math.round(progress)}%`;
                },
                (error) => {
                    // Handle error
                    console.error('Error uploading file:', error);
                    uploadStatus.textContent = 'Error: ' + error.message;
                },
                () => {
                    // Upload berhasil
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        uploadStatus.textContent = 'Upload berhasil!';
                        uploadStatus.innerHTML += `<br><a href="${downloadURL}" target="_blank">Lihat Gambar</a>`;
                        
                        // Simpan URL gambar ke database atau lakukan sesuatu dengan URL-nya
                        console.log('File available at', downloadURL);
                    });
                }
            );
        });
    }
});
