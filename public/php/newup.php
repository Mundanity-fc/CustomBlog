<?php
    function filename($ext): string
    {
        $time = date("Y-m-d_H-i-s");
        return $time . "." . $ext;
    }

    function message($message, $success = 0, $url = "")
    {
        $array = array(
            'success' => $success,
            'message' => $message,
            'url' => $url
        );
        echo json_encode($array);
    }

    if (!empty($_FILES)) {
        if ($_FILES['editormd-image-file']['size'] > 10485760) {
            message("对不起，图片过大");
            exit();
        }
        if ($_FILES["editormd-image-file"]["error"] > 0) {
            message("出错");
            exit();
        }
        $rawname = $_FILES["editormd-image-file"]["name"];
        $ext = explode(".", $rawname);
        $ext = array_pop($ext);
        $ext = strtolower($ext);
        $valid_ext = array("jpg", "png", "webp", "bmp", "gif", "tif");
        if (!in_array($ext, $valid_ext)) exit("文件格式错误");
        $path = "../uploads/";
        if (move_uploaded_file($_FILES["editormd-image-file"]["tmp_name"], $path . filename($ext))) {
            message("出错", 1, $path . filename($ext));
            exit();
        } else {
            message("出错");
            exit();
        }
    }
?>
