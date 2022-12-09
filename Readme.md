# Bash like shell using nodejs

## Commands

- `cd <directory_name>` : Sets current working directory to given directory.
- `pwd` : Lists current working directory.
- `ls <directory_name>` : Lists the contents of the given directory.
- `exit` : Closes the shell.
- **CTRL + C** : Sends a SIGINT to the spawned process.
- **CTRL + Z** : Sends spawned process that is currently in foreground to the background and prints it’s pid after setting the current process as background process.

## Running the shell

Start the shell using `node shell.js`

The shell starts with its default working directory set to user’s home directory.

