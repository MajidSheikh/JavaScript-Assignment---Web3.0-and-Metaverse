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

console.log("\nUnfortunetly I can invite two people only due to table size\n");

invitations.forEach((invitation) => {
    if(invitation.length > 2){
        console.log(`Sorry I can't invite you ${invitations.pop()}`);
    }
})

invitationMessage(invitations, "you are still invited");

function invitationMessage(invitations, message = "Welcome to my success dinner party"){
    invitations.forEach(invitation => {
        console.log(`${message} ${invitation}`);
    });
}

invitations.pop();
invitations.pop();