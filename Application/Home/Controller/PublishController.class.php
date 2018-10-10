<?php
/**
 * +----------------------------------------------------------------------+
 * | IPTV                                                                 |
 * +----------------------------------------------------------------------+
 * |
 * +----------------------------------------------------------------------+
 * | Author: yzq                                                         |
 * | Date:2018/10/8 11:53                                               |
 * +----------------------------------------------------------------------+
 */

namespace Home\Controller;


use Think\Controller;

class PublishController extends Controller
{
    public function index()
    {
        $html = $_REQUEST["htmlContent"];
        $button=$_REQUEST["button"];
        $fileName = "test".time();
        $filePath = APP_PATH . "Home/View/Preview/" . $fileName . ".html";
        $previewFilePath = APP_PATH . "Home/Controller/PreviewController.class.php";
        $this->delLastLine($previewFilePath, $fileName);
        $myFile = fopen($filePath, w);
        self::writeHead($myFile, $html,$button);
        echo "http://localhost:8000/index.php?m=Home&c=Preview&a=" . $fileName;
    }


    /**
     * 删除文件最后一行
     * @param $filePath 文件路径
     */
    public function delLastLine($filePath, $funName)
    {
        $file = $fp = fopen($filePath, 'r') or die("Unable to open file!");
        while (!feof($file)) {
            $fp = fgets($file);
            if ($fp) {
                $content[] = $fp;
            }
        }
//        array_splice($content,count($content)-1,$content,123);
        array_pop($content);
        $fun = "\r\n\tpublic function " . $funName . "()\r\n\t{\r\n\t\t$" . "this->display();\r\n\t}\r\n\r\n";
        array_push($content, $fun);
        array_push($content, "}");
        fclose($file);

        //重新写入文件
        $file = fopen($filePath, 'w+');
        fwrite($file, implode("", $content));
        fclose($file);
    }


    private function writeHead($myFile, $body,$buttons)
    {
        $h = "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <title>Title</title>
    <script type=\"text/javascript\" src=\"__ROOT__/Public/js/lmcommon_v1.0.1.js\"></script>
    <script type=\"text/javascript\" src=\"__ROOT__/Public/js/lmcore_v1.0.1.js?\"></script>
    <script>
        window.onload=function (ev) { 
              var buttons=$buttons;
            LMEPG.ButtonManager.init(['btn1'], buttons, '', true);
         }
     
    </script>

</head>
<body>";
        fwrite($myFile, $h);
        fwrite($myFile, $body);
        $b = "</body>
</html>";
        fwrite($myFile, $b);
        fclose($myFile);
    }

    function uuid($prefix = '')
    {
        $chars = md5(uniqid(mt_rand(), true));
        $uuid = substr($chars, 0, 8) . '-';
        $uuid .= substr($chars, 8, 4) . '-';
        $uuid .= substr($chars, 12, 4) . '-';
        $uuid .= substr($chars, 16, 4) . '-';
        $uuid .= substr($chars, 20, 12);
        return $prefix . $uuid;
    }

}