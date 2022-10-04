const invitations = ["Zia khan", "Daniyal Nagori", "Salman", "Majid Sheikh" ];
invitationMessage(invitations);

console.log(`${invitations[3]} can't make it to the party`);

invitations.pop();

invitations.push("Momin");

invitationMessage(invitations);

function invitationMessage(invitations){
    invitations.forEach(invitation => {
        console.log(`Welcome to my success dinner party ${invitation}`);
    });
}