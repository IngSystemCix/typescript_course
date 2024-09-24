interface Service {
  start(): void;
  stop(): void;
}

class Engine implements Service {
  start(): void {
    console.log('Engine started');
  }

  stop(): void {
    console.log('Engine stopped');
  }
}

class AutoPilot implements Service {
  start(): void {
    console.log('AutoPilot started');
  }

  stop(): void {
    console.log('AutoPilot stopped');
  }
}