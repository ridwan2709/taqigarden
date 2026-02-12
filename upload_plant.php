<?php
header('Content-Type: application/json');

try {
    $folder = 'img/tanaman/';
    $uploadDir = __DIR__ . '/' . $folder;
    if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

    if (!isset($_FILES['plantImage'])) {
        echo json_encode(['success' => false, 'message' => 'File tidak ditemukan']);
        exit;
    }

    $file = $_FILES['plantImage'];
    $fileName = 'plant_' . uniqid() . '.' . pathinfo($file['name'], PATHINFO_EXTENSION);
    $fullPath = $folder . $fileName;

    if (move_uploaded_file($file['tmp_name'], $uploadDir . $fileName)) {
        // Balikin path ke JS agar JS yang simpan ke Firestore
        echo json_encode(['success' => true, 'imageUrl' => $fullPath]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Gagal simpan file']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}