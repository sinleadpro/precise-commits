import * as execa from 'execa';
export interface LineChanges {
    start: number;
    noOfLines: number;
}
export interface LineChangeData {
    removals: LineChanges[];
    additions: LineChanges[];
}
export interface CharacterRange {
    rangeStart: number;
    rangeEnd: number;
}
export declare const NO_LINE_CHANGE_DATA_ERROR = "No line change data could be detected";
export declare function extractLineChangeData(diffData: string): {
    removals: LineChanges[];
    additions: LineChanges[];
};
export declare function calculateCharacterRangesFromLineChanges(lineChangeData: LineChangeData, fileContents: string): CharacterRange[];
export declare function runCommandSync(command: string, args: string[], workingDirectory?: string): execa.ExecaReturns;
export declare function generateFilesWhitelistPredicate(filesWhitelist: string[] | null, relativeWorkingDirectory: string): (file: string) => boolean;
