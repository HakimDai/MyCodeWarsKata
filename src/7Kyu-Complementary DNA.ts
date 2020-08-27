// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development
// and functioning of living organisms.
//
//     If you want to know more http://en.wikipedia.org/wiki/DNA
//
//     In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
//     You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side.
//     DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
//     More similar exercise are found here http://rosalind.info/problems/list-view/ (source)
//
//     dnaStrand("ATTGC") // return "TAACG"
//
// dnaStrand("GTAT") // return "CATA"


export class Kata {
    static dnaStrand(dna: string) {
        let splittedDNA: string[] = dna.split('');
        let complementaryDNA: string = '';
        let complementaryDNASplitted: string[] = [];
        function pushDNA(dna: string) {
            complementaryDNASplitted.push(dna);
        }
        for (let symbol of splittedDNA) {
            switch (symbol) {
                case 'A':
                    pushDNA('T');
                    break;
                case 'T':
                    pushDNA('A');
                    break;
                case 'C':
                    pushDNA('G');
                    break;
                case 'G':
                    pushDNA('C');
                    break;
            }
        }
        return complementaryDNA = complementaryDNASplitted.join('');
    }
}
