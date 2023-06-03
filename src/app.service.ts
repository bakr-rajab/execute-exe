import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';

@Injectable()
export class AppService {
  executeExe() {
    let child = spawn(`D:/code/joo/console/EInvoicingSigner.exe`, ['arg1', 'arg2', 'arg3']);

    child.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    child.on('error', (error) => {
      console.error(`error: ${error.message}`);
    });
  }
}
