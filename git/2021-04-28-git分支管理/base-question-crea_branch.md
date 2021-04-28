## 2021-04-28 学习内容

>参考
> * [《廖雪峰Git教程》](https://www.liaoxuefeng.com/wiki/896043488029600)  

* [一、分支管理]()
  * [1.创建分支]()
  * [2.合并分支]()  
  * [3.分支冲突]()

## 一、分支管理
 分支就是从主线分出来的支线，但这个支线又不影响主线，最后支线完成任务后合并到主线上然后删除支线。  
  <font size=4 > 1.（创建分支） </font>

#### 示例
    $ git checkout -b dev #创建dev分支，并切换该分支  
    Switched to a new branch 'dev' #显示此代码,表示创建成功并切换到dev分支  
<font size=3>分支创建完成了我们就需要合并了</font>    
  <font size=4 > 2.（合并分支） </font>  
  首先我们需要切换为main分支，用命令指定分支合并当前分支。

#### 示例：
    git merge dev  #将dev合并到当前分支
    git branch -d dev #删除dev分支  

合并完成后删除dev分支，主分支不受任何影响

  <font size=4 > 3.（分支冲突） </font>  
 首先分支相当于修改PPT，你改前几页，他也改前几页，等到要合并的时候，就会发生问题也就是分支冲突。
 
 出现冲突我们可以是用 git status查看冲突的文件  
 示例：  

    $ git status
    On branch master
    Your branch is ahead of 'origin/master' by 2 commits.
      (use "git push" to publish your local commits)
    
    You have unmerged paths.
      (fix conflicts and run "git commit")
      (use "git merge --abort" to abort the merge)
    
    Unmerged paths:
      (use "git add <file>..." to mark resolution)
      	both modified:   readme.txt
    no changes added to commit (use "git add" and/or "git commit -a") 
  Git用<<<<<<<，=======，>>>>>>>标记出不同分支的内容


## 注意点：
  * 在创建的分支操作，切换到主分支是不显示的，只有当分支合并后，才可以显现。
  * 分支合并时有提示信息，出现Fast-forward信息，是告诉我们，此次合并是主分支指向dev提交的。
  * 分支出现无法合并的时候，我们先找到冲突原因并解决，即可提交合并成功。


