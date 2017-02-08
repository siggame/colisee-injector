
// offload functionality to testable function
export function inject(competitors: number[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        resolve();
    });
}