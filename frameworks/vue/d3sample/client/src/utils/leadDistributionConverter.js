const distributionObject = {
    name:'',
    children:[]
}


const LeadDistributionConverter = {
    GetObject(jsonData) {

        let distributions = JSON.parse(JSON.stringify(jsonData));           
        
        let personDistribution = Object.create(distributionObject);

        personDistribution.name = "Person";

        personDistribution.children = [];

        distributions.Data.forEach(elementLead => {
            let childLead = Object.create(distributionObject);

            this.LoadLeadElement(elementLead, childLead);

            personDistribution.children.push(childLead);
        });

        return personDistribution;
    },
    LoadLeadElement(elementLead, childLead){
            
            let sourceCode = elementLead.Source.Code != null ? elementLead.Source.Code : "N/D";
            let targetCode = elementLead.Target.Campaign != null ? elementLead.Target.Campaign : "N/D";

            childLead.name = sourceCode + ' | ' + targetCode;

            if (elementLead.Distributions)
            {
                childLead.children = [];

                elementLead.Distributions.forEach(elementDistribution => {

                    let childDistribution = Object.create(distributionObject);
                    childDistribution.name = elementDistribution.Name;
                    childLead.children.push(childDistribution)
                })
            }
    }
}


export default LeadDistributionConverter



