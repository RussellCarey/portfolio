const development: boolean = true;
console.log("Is dev run and found that development mode is currently running::" + development);

export default function isDev(): boolean {
  return development;
}
