const fs = require("fs");
var readline = require("readline");
const { spawn } = require("node:child_process");
const { exec } = require("child_process");

readline.emitKeypressEvents(process.stdin);

process.stdout.write("\n<------------------Shell------------------->\n");

const dirPath = () => {
  process.stdout.write(`${process.cwd()}> `);
}

dirPath();

process.stdin.on("data", async function (line) {
  line = line.toString().trim();
  const [command, ...args] = line.split(" ");

  //cd command
  if (command == "cd") {
    process.chdir(args[0]);
  } 
  
  //ls command
  else if (command == "ls") {

    try{      
      fs
      .readdirSync(process.cwd())
      .forEach((files) => {
          process.stdout.write(`${files} \n`);
      })

      process.stdout.write("\n");
      // dirPath();
    }
    catch{
        process.stdout.write("Error in displaying files");
      }
    }
  
  //pwd command
  else if (command === "pwd") {
    process.stdout.write(`${process.cwd()}\n`);
  } 

  //exit command
  else if (command === "exit") {
    process.stdout.write("Exiting shell......\n");
    process.exit();
  } 

  else {
    exec("error", () => {
        process.stdout.write("Invalid command");
        process.stdout.write("\n");
        dirPath();
    });
  }

  //keyboard input
    process.stdin.on("keypress", (str, key) => {

      //ctrl + c for SIGINT
      if (key.ctrl && key.name === "c") {
        process.exit();
      } 
      //ctrl + z for SIGTSTP
      else if (key.ctrl && key.name === "z") {
        process.stdout.write(process.pid);
      }
    });

    dirPath();
});