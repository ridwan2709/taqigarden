<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

try {
    $folder = 'img/artikel/';
    $uploadDir = __DIR__ . '/' . $folder;
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    if (!isset($_FILES['articleImage'])) {
        echo json_encode(['success' => false, 'message' => 'File tidak ditemukan']);
        exit;
    }

    $file = $_FILES['articleImage'];
    
    // Validasi tipe file
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!in_array($file['type'], $allowedTypes)) {
        echo json_encode(['success' => false, 'message' => 'Hanya file gambar (JPEG, PNG, GIF) yang diizinkan']);
        exit;
    }

    // Generate nama file unik
    $fileName = 'article_' . uniqid() . '.' . pathinfo($file['name'], PATHINFO_EXTENSION);
    $fullPath = $folder . $fileName;

    if (move_uploaded_file($file['tmp_name'], $uploadDir . $fileName)) {
        // Return path ke JS untuk disimpan ke Firestore
        echo json_encode([
            'success' => true, 
            'imageUrl' => $fullPath,
            'message' => 'Gambar berhasil diupload'
        ]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Gagal menyimpan file']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Terjadi kesalahan: ' . $e->getMessage()]);
}
