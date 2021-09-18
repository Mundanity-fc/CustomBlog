# CustomBlog

这就是一个全新的轮子

但是目前十分的简陋

感谢StartBootstrap，使得这个简陋的轮子看起来还算正常

拉取到本地后配置好.env，composer和npm都安装一遍，数据库再迁移一下就能用。但是配置完后进主页一定会404，因为路径/没有文章…… 向数据库的custompost表里随便添加一个就能用了，slug得是“主页”。

markdown编辑器在本地上传图片的时候会报错，因为./public下没有uploads文件夹，需要自己手动创建（或者可以修改./public/php/newup.php中的存储路径

就，挺简陋的。
