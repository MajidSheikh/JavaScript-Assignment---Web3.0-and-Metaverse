const invitations = ["Zia khan", "Daniyal Nagori", "Salman", "Majid Sheikh" ];
invitationMessage(invitations);

console.log(`${invitations[3]} can't make it to the party`);

invitations.pop();

invitations.push("Momin");

invitationMessage(invitations);


console.log("\nGuys, I just found a bigger dinner table and more people will join\n");
invitations.unshift("Sajid");
invitations.unshift("Basit");

invitationMessage(invitations);

function invitationMessage(invitations){
    invitations.forEach(invitation => {
        console.log(`Welcome to my success dinner party ${invitation}`);
    });
}