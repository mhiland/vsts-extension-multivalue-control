import { WorkItemFormService } from "TFS/WorkItemTracking/Services";

export async function getSuggestedValues(): Promise<string[]> {
    const inputs: IDictionaryStringTo<string> = VSS.getConfiguration().witInputs;
    const valuesString: string = inputs.Values;
    if (valuesString) {
        return valuesString.split(";");
    }
    this.setMessage("getting form service");
    // if the values input were not specified as an input, get the suggested values for the field.
    const service = await WorkItemFormService.getService();
    return await service.getAllowedFieldValues(this.fieldName) as string[];
}