// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // let currentDNA = mockUpStrand();
  // console.log(currentDNA);
  
  const pAequorFactory = (num,newdnaBases) =>
  {
    return  {
      _specimenNum: num,
      _dna: newdnaBases,    
      mutate()
      {
       let randomBaseIndex = Math.floor(Math.random()*this._dna.length);
       let newBase = returnRandBase();
       while(this._dna[randomBaseIndex] === newBase )
        {
          newBase = returnRandBase();
        }
        this._dna[randomBaseIndex] = newBase;
        return this._dna;   
      },
      compareDna ()
      {
      let example1 = currentDNA;
      let example2 = this._dna;
      let score =0;
      for(let j=0; j<example1.length; j++)
      {
        for(let k=0; k<example2.length; k++)
        {
          if(j === k && example1[j] === example2[k])
          {
            score = score + 1;
          }
        }
      }
      
      return (`specimen 1 and specimen 2 have score of ${score} and  ${Math.floor(100/15*score)}% DNA in common`)
      },
      willLikelySurvive()
      {
        let dnaScore = 0;
        let survivedStrand = [];
        for(let l=0; l< this._dna.length; l++)
        {
          if(this._dna[l] === 'C' || this._dna[l] === 'G')
          {
            dnaScore = dnaScore +1;
          }
        }
        if(Math.floor(100/15*dnaScore)>60)
        {
          survivedStrand.push(this._dna);
        }
        return (survivedStrand);
      }
    };
  }
  
  
  let sampleArray=[]
  for (let m=0; m<5; m++){
    sampleArray.push(pAequorFactory(m,mockUpStrand()))  
   console.log(sampleArray[m]._specimenNum);
  console.log(sampleArray[m]._dna);
  console.log(sampleArray[m].mutate());
  console.log(sampleArray[m].compareDna());
  console.log(sampleArray[m].willLikelySurvive());
  }