## GitHub :
#### git : 
- version control system
#### GitHub commands : 
- 30 dec
- search gitbash :
   - 1st step : 
   - go to gitbash -> get commands
     - git config --global user.name "userName" (github userName)
     - git config --global user.email "email" (github prr jis email se login liaa hai)
   - then close and go on gihub account
- go to github account
     - create "new repository" => with "new button"
     - get "repository-name" & go on "public" and press "create repository" button
     - then you get git command , after
- ek "new folder" banaye usme sara website ka code with file le krr aa jayegen "new folder" me 
   - aur dusari chij website ka name "website.html" se change krr k "index.html" krr dena hai . matlab html file ka nam index.html hi hona chahiye aur dusara nam nahi
   - phir ess new-folder me "gitbash" open karegen phir ess gitbash par github command run karegen 
- run github commands on gitbash in folder
     - git status 
        - toh error aaya bcz hamne git ko initializes hi nhi kia then run "git init"
     - git init 
        - jisse empty repository initialozes ho jati hai 
     - git status  
         - esko chalane se file red color me show ho matlab abhi file git pr commit nhi huyi hai => commit ka matlab hmm ess file ko git prr bhejni hai
     -  git add .
          - matlab enn red files ko add krr dega aapke repository prr jo commit nhi huyi thi
     - abb "git status" command chalaya toh files green show krr rhi matlab abb ready to commited
        -  jha folder me files rakhi hai "normal area" hai aur git prr hota hai "staging area"  , aap jaise hi files prr "git add ." command run kar dete hai toh yeh chal jata hai "staging" par it means ready to commited
     - git commit -m 'first commit'
     - git branch -M main
         - ess command ko chalana jaruri nahi hai
     - git remote add orgin https://github.com/shashi2779/test-website.git
        - ess se files ko kha push kar rhe
     - git push -u origin master
        - git push -u origin main => nhi chalega error aayega master degen
- Note : 
  - jab bhi aap static website ko deploy karne ja rhe ho toh aapki HTML files "index.html" hi ho
- 2nd command => folder me ja ke 
![](img/gitImg.png)

### how to deploy our website on github :
- go to github  account then
- go to any project 
- IN project => tap to setting 
- then scroll
- stop on "Git Hub Pages"
- and click on "check it out here"
- then enable source : none to "master"
- then generate a link of our website after 10 sec
- then "deploy" your website 
- thank you

### how to send our project code to github:
- go to vs code 
- go on wire symbol icon then
   - you get two option 
      - initialize Repository
      - public to github
         - ye direct publish karr dega github pe
- agar aap "vs code" me kuch change kiya toh => commit & push karna hota hai
   - ✅ ye tick commit ka symbol hai commit karna ho toh
   - then go "three dot" to push or "sync change" 
 

