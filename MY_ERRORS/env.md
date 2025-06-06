# Random problems in c++ environment

* non aggregate type error when using vectors in c++ on vscode editor.

To solve this problem use the following ways:
* only to particular file at that time (temporary).
```
 g++ -std=c++11 <inputfile.c++> -o <outputfilename>
```
(or)
* changes done to the entire environment without need of writhing commands writing again and again when error is occurred.
 
 1.Go to code runner settings in vscode
 2.check whether the code runner running is enabled or disabled.
 3.go to coderunner.executor map settings.
 4.change the path as
 ```
 "cpp:""cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
 ```
 to

```
"cpp:""cd $dir && g++ -std=c++17 $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
```


