type VotingOptions = {
  numberOfVotes: number;
  option: string;
};

export class VotingApp {
  private _votingOptions: VotingOptions[] = [];
  constructor(private phrase: string) {}

  votingOption(option: VotingOptions): void {
    this._votingOptions.push(option);
  }

  vote(index: number): void {
    if (!this._votingOptions[index]) return;
    this._votingOptions[index].numberOfVotes += 1;
  }

  showOptions(): void {
    console.log(this.phrase);
    for (const opt of this._votingOptions) {
      console.log(opt.option, opt.numberOfVotes);
    }
  }
}

const voting1 = new VotingApp("Qual sua linguagem favorita?");
voting1.votingOption({ option: "JavaScript", numberOfVotes: 0 });
voting1.votingOption({ option: "TypeScript", numberOfVotes: 0 });
voting1.votingOption({ option: "Python", numberOfVotes: 0 });
voting1.vote(0);
voting1.vote(0);
voting1.vote(1);
voting1.vote(2);
voting1.vote(2);
voting1.vote(1);
voting1.showOptions();
