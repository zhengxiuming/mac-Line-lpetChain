# 在 mac 上使用 Git 和 GitHub 连接 

##1.检查是否存在 SSH KEYS
cd ~/.ssh

##2.如果有 .SSH 目录，请备份好你的 SSH KEY
ls 
mkdir key_backup //创建备份文件夹 
cp id_rsa* key_backup //移动你的 key 文件到备份文件夹 
rm id_rsa*

##3. 创建一个新的 SSH KEY
ssh-keygen -t rsa -C "your_email@youremail.com" 
Generating public/private rsa key pair. Enter file in which to save thekeys (/Users/your_user_directory/.ssh/id_rsa): //这里需要按下 enter 键就好

按下 enter 之后，又会出现下面的提示：

//输入回车后提示输入一个类似于密码的自定义的通行证号，如果直接回车则为空

Enter passphrase(empty for no passphrase):

//提示重新输入以便确认输入是否正确

Enter same passphraseagain:

随后，你会收到一大串的提示，大概的意思是告诉你创建好了 id_rsa 和 id_rsa.pub 文件。

##4.在 GITHUB 上添加你的 SSH KEY
在github中添加ssh（如图示）：
登陆github，选择Account Settings-->SSH Keys 添加ssh
Title：xxxxx@gmail.com
Key：打开你生成的id_rsa.pub文件，将其中内容拷贝至此。创建成功会有相应的提示。

##5.验证你的 GITHUB 连接
ssh -T git@github.com
将会显示一下信息
The authenticity of host 'github.com (207.97.227.239)' can't be established. 
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48. 
Are you sure you want to continue connecting (yes/no)?
输入yes后，显示出下列信息表示连接成功
Hi username! You've successfully authenticated, but GitHub does not provide shell access

二、配置个人信息
Git通过检测用户名和邮箱来跟踪进行commit的用户
##1.设置本地git个人信息：
git config --global user.name "your real name"
git config --global user.email "xxxxx@gmail.com"

##2.设置GitHub网站标记
单击网站中的Account Settings>Account Admin,将APT Token中的那串字符串记录下来，输入到下列命令中：
git config --global github.user username
git config --global github.token 获取到的token
至此，git和github的设置就完成了。下面就是如何将本地代码push到github上，以及如何从github上pull代码了

三、创建一个新的代码库
##1.创建完成后在本地创建一个文件夹并在该文件夹下创建一个README文件
mkdir ~/Hello-World

##2.在user目录下创建一个名为Hello-World的项目文件夹(~代表用户目录，即：C:\Documents and Settings\当前登陆系统的用户名)
cd ~/Hello-World  //更改当前目录到Hello-World目录中
git init  //初始化该文件夹
将会提示以下信息：Initialized empty Git repository in /Users/your_user_directory/Hello-World/.git/touch README

##3.创建完README以后就需要添加并提交文件了
git add README
git add READMEgit commit -m "first commit"
至此已经将要更改的文件提交到头信息中，但并没有真正提交到网站上去，还需要执行下面两个命令：
git remote add origin https://github.com/jjpassion/myTest.git
//(若是第一次提交该项目的文件或是修改项目文件名后则需要这行这个命令，以后就可不用执行该命令)
git push -u origin master

##4.从github中pull代码：
在github中搜到你想要pull的代码，如https://github.com/edgecase/ruby_koans
选择fork，将此repository fock到你的repository下
在本地创建local repository并初始化
使用命令：
$git pull git@github.com:xxxxx/ruby_koans.git
将github上的代码pull到local repository中

