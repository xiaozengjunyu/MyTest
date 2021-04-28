# 2021-04-27 学习内容

* [《Git教程》—版本回退](https://www.liaoxuefeng.com/wiki/896043488029600/896954074659008)
* [《Git教程》—工作区和暂存区](https://www.liaoxuefeng.com/wiki/896043488029600/897271968352576)
* [《Git教程》—管理修改](https://www.liaoxuefeng.com/wiki/896043488029600/897884457270432)

* [《Git教程》—撤销修改](https://www.liaoxuefeng.com/wiki/896043488029600/897889638509536)
* [《Git教程》—删除文件](https://www.liaoxuefeng.com/wiki/896043488029600/900002180232448)

## Git的版本回退
 由于某种原因要代码测试没通过，这就要用到回退了
* git reset --hard HEAD^（^表示上一个版本，n个的话HEAD~N）
* git reset --hard 版本号（回退到指定版本号，git log查看版本库，git reflog用于查看命令历史，方便穿越）
 
## Git工作区与暂存区
 整个文件夹相当于一个工作区，工作区下面一个.git文件夹就是git的版本库，版本库中最重要的就是index暂存区。

## 如何将文件存进版本库
 * 将文件存入到git的版本库中，然后更新文件的值，存储在暂存区。
 * 将暂存区的文件进行效验之后保存到一个树对象，然后将顶层对象指针和要提交的信息合并成commit对象。
  >1. $ git add readme.txt  #将readme文件存入暂存区
  >2. $ git status          #查看当前工作区的状态 
 
## 管理修改
 * git add 命令后文件被放在暂存区，没有提交使用git restore --staged 撤出暂存区域，然后在用 git restore修改内容。
 * 就是要修改的地方现在存储在哪个位置，我们就是用哪个方法去追踪修改。
>1. $ git add readme.txt  #将readme文件存入暂存区
>2. $ git status          #查看当前工作区的状态 
>3. $ git commit -m "git tracks changes" #提交缓存区文件，m后面代表注释
>4. $ git restore --staged readme.txt #将暂存区的文件从暂存区撤出，但不会更改文件内容
>5. $ git restore readme.txt #撤销修改，返回到之前未更改状态

## 删除及还原
 * RM删除之后git status查看状态，git restore还原
 * RM删除之后版本库还有，使用git checkout还原最新版本的文件。
 >1. $ git rm test.txt #删除test文件
 >2. $ git checkout -- test.txt #用版本库的版本替换工作区的版本

## 连接远程仓库（Github）
 首先远程仓库要先创建，之后配置Github的邮箱用户名和SSH，通过SSH使本地仓库和远程仓库连接。
## 注意点：
* 1.确认SSH密钥无误。（权限问题无法提交）
* 2.连接的远程库如果不是空白的需要克隆。（git clone克隆）
* 3.确认本地仓库git目录下是否为空。

### 关于连接出现的问题：
***
    首先一直到连接远程库都是正常的，后面push的时候始终提示无法将某些引用推送到“github”，初步怀疑是密钥错误问题，更改过后依旧报错，查看远程连接源正常，然后发现远程库有默认的md文件，马上克隆远程库到本地，依旧没解决，后面用git status查看文件状态，发现文件路径出错，切换路径重新push成功。

# Git指令
 * git status 查看当前工作区状态
 * git add    将文件存入到暂存区
 * git commit 将暂存区所有文件提交
 * git restore将工作区还未存入暂存区的修改撤销，返回到还未更改之前
 * git restore --staged 将暂存区的文件从暂存区撤出，但不会更改文件内容
 
