//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Name: ClearCache
// Author: Erwin Santacruz
// Date: 02.21.13
// Website: http://www.990adjustments.com/
// Email: hi@990adjustments.com
// Twitter: @990adjustments
//
// Description:
// Adobe After Effects script that clears the disk cache on launch or shutdown.
//
// WARNING: USE AT YOUR OWN RISK. IF YOU ARE UNCOMFORTABLE OR ARE NOT SURE HOW
// TO USE THIS SCRIPT, PLEASE REFRAIN FROM USING IT. WRONG INPUT CAN LEAD TO 
// UNWANTED DELETION OF FILES. THERE IS NO UNDO. YOU HAVE BEEN WARNED!
//
// Legal Mumbo Jumbo:
// THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL 990ADJUSTMENTS OR ERWIN SANTACRUZ AND CONTRIBUTORS
// BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// Three's
{
    // Test your path first! Path to disk cache directory. Make sure this path is correct!
    // Watch the spaces in the path! Here I enclose the path within single quotes.
    var diskPath = "'/Users/art/Library/Preferences/Adobe/After Effects/11.0/Adobe After Effects Disk Cache - GG-25.noindex'";

    // This will output a file on your desktop called files2delete.txt containing the directories
    // that will be deleted. No files will be deleted.
    system.callSystem("cd " + diskPath + "; for i in `ls " + diskPath + "`; do if [ -d $i ]; then echo $i >> ~/Desktop/files2delete.txt; fi; done");


    // Once you are sure everything is correct, comment out the previous system.callSystem line and uncomment the following line.

    //system.callSystem("cd " + diskPath + "; for i in `ls " + diskPath + "`; do if [ -d $i ]; then rm -rf $i; fi; done");

}
// Company!
