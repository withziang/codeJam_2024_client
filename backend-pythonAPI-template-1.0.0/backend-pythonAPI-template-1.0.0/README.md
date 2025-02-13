# A python backend API template for quick development

# Documentation

- `app.py` is the starting point of the api
- New routes file needs to be imported in `app.py`

## Dependency
### Option A: use `requirements.txt`
Easiest way to install dependency. Use `pip install -r requirements.txt`,

### Option B: use `setup.py`
Download dependency while creating a distribution package
- `pip install .`
- `python setup.py install`
- `python setup.py sdist`
- `python setup.py develop`

## Request

### node.js
```        
try {
            const url = 'http://localhost:15060/example-route/post-example';
            axios.post(url, {})
                .then((response:any) => {
                    console.log('Response:', response.data);
                })
                .catch((error:any) => {
                    console.error('Error:', error);
                });
        } catch (e:any){
            console.log(e)
        }
```