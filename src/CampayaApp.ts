import { ApplicationElement } from 'enta';
import Colors from './theme/Colors';
import Machines from './machines/Machines';
import { createProperty, directUpload, getPropertiesPage, PropertyJson, test } from './Services';
import { createAuthenticatedDirectUpload, getPropertyImageBlob, properties, updateProperty, uploadImage } from './services/Api';
import { Property } from './types/Property';

export default class CampayaApp extends ApplicationElement {
    public constructor() {
        super();
        this.style.height = '100vh';
        document.body.style.backgroundColor = Colors.NEUTRAL_50.toString();
        // this.upload();
        // this.uploadImage(this.URL);
        // this.getPage(1); // sidste side var 172 !!!
        this.getProperties(120);
        // this.createAuthenticatedDirectUpload();
    }

    private async createAuthenticatedDirectUpload(): Promise<void> {
        const [result, error] = await createAuthenticatedDirectUpload();
        console.log(result, error);
    }

    private total = 0;
    private errors = 0;
    private URL = 'https://dqif0xfu9mg0a.cloudfront.net/imageCache/property/ih-images.interhome.com/ES9587.502.1/partner-xlarge/5A56365000C61EEC8CC7594418F105BE_Crop_600_400';

    // id: b428cf5a-758e-4fe0-6897-c876d3c2a200

    private async upload(): Promise<void> {
        const response = await directUpload('https://upload.imagedelivery.net/7G7XxXgIOc0EMphWhmzfNA/5d188715-0d70-46ae-69b4-1b5e4c58fc00');
        console.log(response);
    }

    private async uploadImage(url: string): Promise<boolean> {
        const result = await test(url);
        console.log('result', result);
        return true;
    }

    private async getPage(page: number): Promise<void> {
        const properties: Array<PropertyJson> = await getPropertiesPage(page);
        for (const property of properties) {
            console.table(property);
            // await this.createProperty(property);
            // console.log('total', this.total, 'errors', this.errors);
        }
        if (this.total >= 5000) {
            console.log('Created 5.000 properties :)');
        } else {
            setTimeout(() => {
                this.getPage(page + 1);
            }, 500);
        }
    }

    private async createProperty(property: PropertyJson): Promise<boolean> {
        const [created, error] = await createProperty(property);
        if (created) {
            // console.log('created', created.id);
            this.total++;
            return true;
        }
        if (error) {
            console.log(error.message);
            this.errors++;
        }
        return false;
    }

    private propertyCount = 0;
    private propertyError = 0;
    private pathError = 0;
    private blobError = 0;
    private directError = 0;
    private uploadError = 0;
    private updateError = 0;

    private async getProperties(size: number, cursor: string | null = null): Promise<void> {
        const [propertiesResponse, error] = await properties(size, cursor);
        console.log(propertiesResponse);
        /* let property: Property | null = null;
        let afterCursor: string | null = null;
        if (propertiesResponse && propertiesResponse.data && propertiesResponse.data.properties && propertiesResponse.data.properties.data) {
            if (propertiesResponse.data.properties.data.length > 0) {
                property = propertiesResponse.data.properties.data[0];
                afterCursor = propertiesResponse.data.properties.after;
            }
        }
        if (property) {
            const path = property.img;
            const needle = '_Crop_600_400';
            const index = path.indexOf(needle);
            if (index !== -1) {
                const original = path.substring(0, index);
                const [blob, error] = await getPropertyImageBlob(original);
                if (blob) {
                    const [createAuthenticatedDirectUploadResponse, error] = await createAuthenticatedDirectUpload();
                    if (createAuthenticatedDirectUploadResponse && createAuthenticatedDirectUploadResponse.result) {
                        property.picture = createAuthenticatedDirectUploadResponse.result.id;
                        const uploadURL = createAuthenticatedDirectUploadResponse.result.uploadURL;
                        const [uploadImageResponse, error] = await uploadImage(uploadURL, blob, property.id);
                        if (uploadImageResponse) {
                            const [updated, error] = await updateProperty(property);
                            if (updated) {
                                this.propertyCount++;
                                this.logProgress();
                                this.next(afterCursor);
                            } else {
                                this.updateError++;
                                this.logProgress();
                                this.next(afterCursor);
                            }
                        } else {
                            this.uploadError++;
                            this.logProgress();
                            this.next(afterCursor);
                        }
                    } else {
                        this.directError++;
                        this.logProgress();
                        this.next(afterCursor);
                    }
                } else {
                    this.blobError++;
                    this.logProgress();
                    this.next(afterCursor);
                }
            } else {
                this.pathError++;
                this.logProgress();
                this.next(afterCursor);
            }
        } else {
            this.propertyError++;
            this.logProgress();
            this.next(afterCursor);
        } */
    }

    private logProgress(): void {
        console.log('count', this.propertyCount, 'property error', this.propertyError, 'path error', this.pathError, 'blob error', this.blobError, 'direct error', this.directError, 'upload error', this.uploadError, 'update error', this.updateError);
    }

    private next(afterCursor: string | null): void {
        if (afterCursor) {
            this.getProperties(1, afterCursor);
        } else {
            console.log('All images uploaded!!');
        }
    }

    // private machines = new Machines(this);
}
customElements.define('campaya-app', CampayaApp);
