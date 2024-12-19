document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const nationality = document.getElementById('nationality').value;
            const age = parseInt(document.getElementById('age').value);
            const gender = document.getElementById('gender').value;

            //check age limit
            if (age >= 18) {
                fetch('http://localhost:3000/Users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        nationality: nationality,
                        age: age,
                        gender: gender
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log('User saved:', data);
                    document.getElementById('userForm');
                    document.getElementById('voteSection');
                })
                .catch(error => {
                    console.error('Error saving user:', error);
                    alert('Error submitting your data. Please try again.');
                });
            } else {
                alert('You must be 18 or older to vote.');
            }
        });



        //fetch candidates
const candidatesUrl = "http://localhost:3000";

async function fetchCandidates() {
    try {
        const response = await fetch(`${candidatesUrl}/candidates`);
        if (!response.ok) {
            throw new Error('Unable to fetch candidates');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        alert("Error fetching candidates.");
    }
}
async function voteForCandidate(candidateId, currentVotes) {
    try {
        const response = await fetch(`${candidatesUrl}/candidates/${candidateId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Votes: currentVotes + 1,
            }),
        });

         if (!response.ok) {
            throw new Error(`Failed to update votes: ${response.statusText}`);
        }

        const updatedCandidate = await response.json();
        alert(`Vote submitted for ${updatedCandidate.name}!`);
        renderCandidates(); 
    } catch (error) {
        console.error(error);
        alert("Error submitting your vote. Please try again.");
    }
}

async function renderCandidates() {
    const candidatesContainer = document.getElementById("candidates");
    const candidates = await fetchCandidates();

    if (!candidates) return; 

    candidatesContainer.innerHTML = "";

    candidates.forEach(candidate => {
        const candidateHTML = `
            <div>
                <p>${candidate.name}</p>
                <p>${candidate.bio}</p>
                <img src="${candidate.image}" alt="${candidate.name}" ><br>
                <p>Votes: <span id="votes-${candidate.id}">${candidate.Votes}</span></p>
                <button onclick="voteForCandidate(${candidate.id}, ${candidate.Votes})">Vote</button>
            </div>
            <br>
        `;

        candidatesContainer.innerHTML += candidateHTML;
    });
}

renderCandidates();









        
        //  vote form submission
        document.getElementById('voteForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const selectedCandidateId = document.querySelector('input[name="candidate"]:checked')?.value;
            if (selectedCandidateId) {
                // Send the vote to the server
                fetch(`http://localhost:3000/candidates/${selectedCandidateId}`, {
                    method: 'PATCH', // Update the candidate's votes count
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        Votes: 1 // Increment the vote count by 1
                    })
                })
                .then(response => response.json())
                .then(data => {
                    alert('Vote submitted successfully!');
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong, please try again.');
                });
            } else {
                alert('Please select a candidate to vote for.');
            }
        });
    