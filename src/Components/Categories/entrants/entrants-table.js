import './entrants-table.css'

function Entrants() {
    return (
        <div>
            <div class="filter-container">
                <div class="searchbar">
                                    <label for="name-search">Search by Name:</label>
                <input type="text" id="name-search" placeholder="Type a name..." onkeyup="applyFilters()" />
                </div>

                <div class="checkbox-group">
                    <label><input type="checkbox" value="Category 1" class="category-filter" /> Category 1</label>
                    <label><input type="checkbox" value="Category 2" class="category-filter" /> Category 2</label>
                    <label><input type="checkbox" value="Category 3" class="category-filter" /> Category 3</label>
                    <label><input type="checkbox" value="Category 4" class="category-filter" /> Category 4</label>
                    <label><input type="checkbox" value="Category 5" class="category-filter" /> Category 5</label>
                    <label><input type="checkbox" value="Category 6" class="category-filter" /> Category 6</label>
                    <label><input type="checkbox" value="Category 7" class="category-filter" /> Category 7</label>
                    <label><input type="checkbox" value="Category 8" class="category-filter" /> Category 8</label>
                </div>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Emily Davis</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Michael Scott</td>
                            <td>67</td>
                        </tr>
                        <tr>
                            <td>Dwight Schrute</td>
                            <td>54</td>
                        </tr>
                        <tr>
                            <td>Pam Beesly</td>
                            <td>33</td>
                        </tr>
                        <tr>
                            <td>Jim Halpert</td>
                            <td>41</td>
                        </tr>
                        <tr>
                            <td>Angela Martin</td>
                            <td>36</td>
                        </tr>
                        <tr>
                            <td>Oscar Martinez</td>
                            <td>47</td>
                        </tr>
                        <tr>
                            <td>Kelly Kapoor</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Ryan Howard</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>Creed Bratton</td>
                            <td>61</td>
                        </tr>
                        <tr>
                            <td>Stanley Hudson</td>
                            <td>56</td>
                        </tr>
                        <tr>
                            <td>Phyllis Vance</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>Toby Flenderson</td>
                            <td>39</td>
                        </tr>
                        <tr>
                            <td>Kevin Malone</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>Meredith Palmer</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Andy Bernard</td>
                            <td>39</td>
                        </tr>
                        <tr>
                            <td>Erin Hannon</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <td>Holly Flax</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>Darryl Philbin</td>
                            <td>44</td>
                        </tr>
                        <tr>
                            <td>Jan Levinson</td>
                            <td>47</td>
                        </tr>
                        <tr>
                            <td>Roy Anderson</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>Carol Stills</td>
                            <td>51</td>
                        </tr>
                        <tr>
                            <td>Todd Packer</td>
                            <td>49</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Entrants;