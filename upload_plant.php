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
            $response['imageUrl'] = $fullPath;
            $response['success'] = true;
    } else {
        echo json_encode(['success' => false, 'message' => 'Gagal simpan file']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}

if ($_FILES['plantImage2']) {
    try {
    $folder = 'img/tanaman/';
    $uploadDir = __DIR__ . '/' . $folder;
    if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

    if (!isset($_FILES['plantImage2'])) {
        // echo json_encode(['success' => false, 'message' => 'File tidak ditemukan']);
        exit;
    }

    $file = $_FILES['plantImage2'];
    $fileName = 'plant_' . uniqid() . '.' . pathinfo($file['name'], PATHINFO_EXTENSION);
    $fullPath = $folder . $fileName;

    if (move_uploaded_file($file['tmp_name'], $uploadDir . $fileName)) {
        // Balikin path ke JS agar JS yang simpan ke Firestore
            $response['imageUrl2'] = $fullPath;
            // $response['success'] = true;
    } else {
        // echo json_encode(['success' => false, 'message' => 'Gagal simpan file']);
    }
    } catch (Exception $e) {
        // echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}
if ($_FILES['plantImage3']) {
   try {
    $folder = 'img/tanaman/';
    $uploadDir = __DIR__ . '/' . $folder;
    if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

    if (!isset($_FILES['plantImage3'])) {
        // echo json_encode(['success' => false, 'message' => 'File tidak ditemukan']);
        exit;
    }
    $file = $_FILES['plantImage3'];
    $fileName = 'plant_' . uniqid() . '.' . pathinfo($file['name'], PATHINFO_EXTENSION);
    $fullPath = $folder . $fileName;

    if (move_uploaded_file($file['tmp_name'], $uploadDir . $fileName)) {
        // Balikin path ke JS agar JS yang simpan ke Firestore
            $response['imageUrl3'] = $fullPath;
            // $response['success'] = true;
    } else {
        // echo json_encode(['success' => false, 'message' => 'Gagal simpan file']);
    }
    } catch (Exception $e) {
        // echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}
if ($_FILES['plantImage4']) {
    try {
    $folder = 'img/tanaman/';
    $uploadDir = __DIR__ . '/' . $folder;
    if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

    if (!isset($_FILES['plantImage4'])) {
        // echo json_encode(['success' => false, 'message' => 'File tidak ditemukan']);
        exit;
    }

    $file = $_FILES['plantImage4'];
    $fileName = 'plant_' . uniqid() . '.' . pathinfo($file['name'], PATHINFO_EXTENSION);
    $fullPath = $folder . $fileName;

    if (move_uploaded_file($file['tmp_name'], $uploadDir . $fileName)) {
        // Balikin path ke JS agar JS yang simpan ke Firestore
            $response['imageUrl4'] = $fullPath;
            // $response['success'] = true;
    } else {
        // echo json_encode(['success' => false, 'message' => 'Gagal simpan file']);
    }
    } catch (Exception $e) {
        // echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}
if ($_FILES['plantImage5']) {
    try {
    $folder = 'img/tanaman/';
    $uploadDir = __DIR__ . '/' . $folder;
    if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

    if (!isset($_FILES['plantImage5'])) {
        // echo json_encode(['success' => false, 'message' => 'File tidak ditemukan']);
        exit;
    }

    $file = $_FILES['plantImage5'];
    $fileName = 'plant_' . uniqid() . '.' . pathinfo($file['name'], PATHINFO_EXTENSION);
    $fullPath = $folder . $fileName;

    if (move_uploaded_file($file['tmp_name'], $uploadDir . $fileName)) {
        // Balikin path ke JS agar JS yang simpan ke Firestore
            $response['imageUrl5'] = $fullPath;
            // $response['success'] = true;
    } else {
        // echo json_encode(['success' => false, 'message' => 'Gagal simpan file']);
    }
} catch (Exception $e) {
    // echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
}

echo json_encode($response);